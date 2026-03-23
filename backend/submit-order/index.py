import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта Сашими и сохраняет в базу данных."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {
            "statusCode": 405,
            "headers": cors_headers,
            "body": json.dumps({"error": "Method not allowed"}),
        }

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()
    comment = (body.get("comment") or "").strip()
    items = body.get("items") or []
    total_price = int(body.get("totalPrice") or 0)

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    cur.execute(
        """
        INSERT INTO orders (name, phone, comment, items, total_price)
        VALUES (%s, %s, %s, %s, %s)
        RETURNING id, created_at
        """,
        (name, phone, comment, json.dumps(items, ensure_ascii=False), total_price),
    )
    row = cur.fetchone()
    order_id = row[0]
    created_at = row[1].isoformat()

    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps(
            {
                "success": True,
                "orderId": order_id,
                "message": "Заявка принята! Мы свяжемся с вами в ближайшее время.",
                "createdAt": created_at,
            },
            ensure_ascii=False,
        ),
    }

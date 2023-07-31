import mysql.connector

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="root",
    database="pandeyji_eatery"
)


try:
    cursor = cnx.cursor()

    # Execute a simple query to check the connection
    cursor.execute("SELECT 1")

    # Fetch the result
    result = cursor.fetchone()

    print("Successfully connected to MySQL Workbench.")
    print("Result of the query:", result)

    # Closing the cursor and connection
    cursor.close()
    cnx.close()

except mysql.connector.Error as err:
    print("Error:", err)

# Function to fetch the order status from the order_tracking table
def get_order_status(order_id: int):
    cursor = cnx.cursor()

    # Executing the SQL query to fetch the order status
    query = "SELECT status FROM order_tracking WHERE order_id = %s"
    cursor.execute(query, (order_id,))

    # Fetching the result
    result = cursor.fetchone()
    

    # Closing the cursor
    cursor.close()

   
    # Returning the order status
    if result:
        return result[0]
    else:
        return None
from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import JSONResponse
import database_connector
app = FastAPI()

@app.post("/")
async def handle_request(request: Request):
    # return {"message":"hello"}
    
    # Retrieve the JSON data from the request
    payload = await request.json()

    
    intent = payload['queryResult']['intent']['displayName']
    parameters = payload['queryResult']['parameters']
   
   
   
    if intent == "track.order - context: ongoing-tracking":
        return get_order_status(parameters)
        
    
def get_order_status(parameters: dict):
    order_id = parameters['order_id']
   

    order_status = database_connector.get_order_status(order_id)
    if order_status:
        fulfillment_text = f"The order status for order id: {order_id} is: {order_status}"
    else:
        fulfillment_text = f"No order found with order id: {order_id}"

    return JSONResponse(content={
        "fulfillmentText": fulfillment_text
    })
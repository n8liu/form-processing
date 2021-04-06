from pymongo import MongoClient
import pprint

client = MongoClient("mongodb://localhost:27017/")
db = client['localdb']
collection = db['localcollection']

def get_posts():
    return [{'text': document['text']} for document in collection.find()] 

def insert_post(text):
    post = {"text": text,}
    collection.insert_one(post)

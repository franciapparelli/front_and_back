import os
from tenacity import retry, wait_fixed, stop_after_delay
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

DB_NAME = os.getenv('DB_NAME')
DB_HOST = os.getenv('DB_HOST')
DB_DIALECT = os.getenv('DB_DIALECT')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')

URL_CONNECTION = '{}://{}:{}@{}/{}'.format(DB_DIALECT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)

@retry(wait=wait_fixed(4), stop=stop_after_delay(60))
def connect_with_retry():
    engine = create_engine(URL_CONNECTION)
    try:
        engine.connect()
    except OperationalError as e:
        raise e

engine = create_engine(URL_CONNECTION)

localSession = sessionmaker(autoflush=False, autocommit=False, bind=engine)

Base = declarative_base()

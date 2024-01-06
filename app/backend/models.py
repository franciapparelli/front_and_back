from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import Mapped, relationship
from sqlalchemy.orm import mapped_column

from database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30), index=True, unique=True)
    password = Column(String(30), index=True)
    tasks = relationship("Task", backref='users')

class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30), index=True)
    description = Column(String(60), index=True)
    id_user = Column(Integer, ForeignKey('users.id'), index=True)
    state = Column(String(30), index=True)
from sqlalchemy.orm import Session

from models import User
from schemas import UserData
from models import Task
from schemas import TaskData

def get_users(db: Session):
    return db.query(User).all()

def get_tasks(db: Session):
    return db.query(Task).all()

def get_user_by_id(db: Session, id: int):
    return db.query(User).filter(User.id == id).first()

def get_task_by_id(db: Session, id: int):
    return db.query(Task).filter(Task.id == id).first()

def get_user_by_name(db: Session, name: str):
    return db.query(User).filter(User.name == name).first()

def create_user(db: Session, user: UserData):
    fake_password = user.password + '#fake'
    new_user = User(name=user.name, password=fake_password)
    db.add(new_user)
    db.commit()
    db.flush(new_user)
    return new_user

def create_task(db: Session, task: TaskData):
    new_task = Task(name=task.name, description=task.description, state=task.state, id_user=task.id_user)
    db.add(new_task)
    db.commit()
    db.flush(new_task)
    return new_task

def delete_user_by_id(db: Session, id: int):
    user = db.query(User).filter(User.id == id).first()
    db.delete(user)
    db.commit()
    return True

def delete_task_by_id(db: Session, id: int):
    task = db.query(Task).filter(Task.id == id).first()
    db.delete(task)
    db.commit()
    return True

def delete_all_users(db: Session):
    db.query(User).delete()
    db.commit()

def delete_all_tasks(db: Session):
    db.query(Task).delete()
    db.commit()


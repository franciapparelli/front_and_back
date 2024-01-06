from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import crud
from database import engine, localSession
from schemas import UserData, UserId
from schemas import TaskData, TaskId
from models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Your API Title",
    description="Your API Description",
    version="1.0.0",
    openapi_tags=[
        {"name": "users", "description": "Operations related to users"},
        {"name": "tasks", "description": "Operations related to tasks"},
    ],
)

origins = [
    '*'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
    )



def get_db():
    db = localSession()
    try:
        yield db
    finally:
        db.close()
    

@app.get('/')
def root():
    return "Hi, my name is FastAPI"

@app.get('/api/users/', response_model=list[UserId], tags=['users'])
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db=db)

@app.get('/api/tasks/', response_model=list[TaskId], tags=['tasks'])
def get_tasks(db: Session = Depends(get_db)):
    return crud.get_tasks(db=db)

@app.get('/api/users/{id:int}', response_model=UserId, tags=['users'])
def get_user(id: int, db: Session = Depends(get_db)):
    user_by_id = crud.get_user_by_id(db=db, id=id)
    if user_by_id:
        return user_by_id
    raise HTTPException(status_code=404, detail='User not found.')

@app.get('/api/tasks/{id:int}', response_model=TaskId, tags=['tasks'])
def get_task(id: int, db: Session = Depends(get_db)):
    task_by_id = crud.get_task_by_id(db=db, id=id)
    if task_by_id:
        return task_by_id
    raise HTTPException(status_code=404, detail='User not found.')

@app.post('/api/users/', response_model=UserId, tags=['users'])
def create_user(user: UserData, db: Session = Depends(get_db)):
    check_name = crud.get_user_by_name(db=db, name=user.name)
    if check_name:
        raise HTTPException(status_code=400, detail="User already exists.")
    return crud.create_user(db=db,user=user)

@app.post('/api/tasks/', response_model=TaskId, tags=['tasks'])
def create_task(task: TaskData, db: Session = Depends(get_db)):
    check_name = crud.get_user_by_name(db=db, name=task.name)
    if check_name:
        raise HTTPException(status_code=400, detail="Task already exists.")
    return crud.create_task(db=db,task=task)

@app.delete('/api/users/{id:int}', response_model=UserId, tags=['users'])
def delete_user(id: int, db: Session = Depends(get_db)):
    return crud.delete_user_by_id(db=db, id=id)

@app.delete('/api/tasks/{id:int}', response_model=TaskId, tags=['tasks'])
def delete_task(id: int, db: Session = Depends(get_db)):
    return crud.delete_task_by_id(db=db, id=id)

@app.delete('/api/users/', response_model=list[UserId], tags=['users'])
def delete_users(db: Session = Depends(get_db)):
    return crud.delete_all_users(db=db)

@app.delete('/api/tasks/', response_model=list[TaskId], tags=['tasks'])
def delete_tasks(db: Session = Depends(get_db)):
    return crud.delete_all_tasks(db=db)

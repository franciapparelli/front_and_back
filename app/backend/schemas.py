from pydantic import BaseModel

class UserData(BaseModel):
    name: str
    password: str

class UserId(UserData):
    id: int

class TaskData(BaseModel):
    name: str
    description: str
    state: str
    id_user : int

class TaskId(TaskData):
    id: int
    
import datetime
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# 允许跨域传输数据
CORS(app)

nowTime = datetime.datetime.now()


@app.route('/time')
def get_time():
    return {
        'Task': 'Connect the frontend and the backend successfully!',
        'Date': nowTime,
        'Frontend': 'React',
        'Backend': 'Flask'
    }


if __name__ == '__main__':
    app.run(debug=True, port=3389)
__author__ = 'zehu'

' url handlers '

import re, time, json, logging, hashlib, base64, asyncio

from coroweb import get, post

from models import User, Comment, Blog, next_id

@get('/')
def index(request):
    summary = 'Whenever you cry, there must be some elves swimming in your heart ocean, so dim, so quiet.'
    blogs = [
            Blog(id='1', name='Test Blog', summary=summary, created_at=time.time()-120),
            Blog(id='2', name='Something weird', summary=summary, created_at=time.time()-3600),
            Blog(id='3', name='Learn Python', summary=summary, created_at=time.time()-7200)
            ]
    return {
        '__template__': 'blogs.html',
        'blogs': blogs
    }


@get('/api/users')
def api_get_users(*, page='1'):
    users = yield from User.findAll(orderBy='created_at desc') 
    for u in users:
        u.passwd = '******'
    return dict(users=users)

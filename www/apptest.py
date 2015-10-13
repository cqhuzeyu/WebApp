# -*- coding: utf-8 -*-

import orm, asyncio
from models import User, Blog, Comment

@asyncio.coroutine
def test(loop):
	yield from orm.create_pool(loop = loop, host='127.0.0.1', port=3306, user='root', password='19900411', db='awesome')
	u = User(name='zeyuhu', email='zeyuhu@example.com', passwd='19900411', image='about:blank', admin=1)
	yield from u.save()
	#l = yield from User.findAll()
	#for x in l:
	#    print(x)

loop = asyncio.get_event_loop()
loop.run_until_complete(test(loop))
loop.close()

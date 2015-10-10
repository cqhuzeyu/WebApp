# -*- coding: utf-8 -*-

import orm, asyncio
from models import User, Blog, Comment

@asyncio.coroutine
def test(loop):
	yield from orm.create_pool(loop = loop, host='127.0.0.1', port=3306, user='root', password='19900411', db='awesome')
	#u = User(name='Test', email='tttest@example.com', passwd='1234567890', image='about:blank')
	#yield from u.save()
	l = yield from User.findAll()
	for x in l:
	    print(x)

loop = asyncio.get_event_loop()
loop.run_until_complete(test(loop))
loop.close()

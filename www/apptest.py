# -*- coding: utf-8 -*-

import orm, asyncio
from models import User, Blog, Comment

@asyncio.coroutine
def test(loop):
	yield from orm.create_pool(loop = loop, user='root', password='19900411', db='awesome')
	u = User(name='Test', email='test@example.com', password='1234567890', image='about:blank')
	yield from u.save()

loop = asyncio.get_event_loop()
loop.run_until_complete(test(loop))
loop.cloes()

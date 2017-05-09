/**
 * Created by yakuncyk on 2017/5/2.
 */

class Storage {
  constructor() {
    console.log('in constructor')
    this.fooPromise = async () => '给你'
    // this.cachePromise = caches.open('avatars')
  }

  async getAvatar(name) {
    const result = await this.fooPromise()

    console.log('路人甲抢戏')

    return result
  }
}

new Storage().getAvatar().then(data => {
  console.log('吃瓜群众在等待:', data)
})
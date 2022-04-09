import nProgress from 'nprogress'
import router from '.'

router.beforeEach((from, to, next) => nProgress.start() && next())

router.afterEach(() => nProgress.done())



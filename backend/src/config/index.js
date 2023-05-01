import commonConfig from './config.common'
import developmentConfig from './config.develop'
import productConfig from './config.product'

import dotenv from 'dotenv'
dotenv.config()

export default process.env.RUNTIME !== `prod`
  ? { ...commonConfig, ...developmentConfig }
  : { ...commonConfig, ...productConfig }

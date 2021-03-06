import { Dimensions } from 'react-native'

const percent = (value, dimension = 'height') => {
  // CHECKS FOR VALID INPUT BEFORE CONVERSION
  value = parseInt(value)
  if (!isNaN(value) && value <= 100) {
    const percentage = (value / 100) * Dimensions.get('window')[dimension]
    return percentage
  }

  throw new Error('Invalid, expecting a value between 1 and 100.')
}

export default percent

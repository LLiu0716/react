import moment from 'moment'

export function moment_Date ( val: any, format: string = 'YYYY-MM-DD' ) {
  return moment( val ).format( format )
}

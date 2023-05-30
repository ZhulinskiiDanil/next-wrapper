import { v4 as uuidv4 } from 'uuid'
import { ISetting, IFullSetting } from '@/ts/interfaces/layout/setting'

export function createSetting(dto: ISetting): IFullSetting {
  return { ...dto, hash: uuidv4() }
}
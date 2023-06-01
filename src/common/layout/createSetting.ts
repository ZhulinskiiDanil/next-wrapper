import { v4 as uuidv4 } from 'uuid'
import { ISetting, IFullSetting } from '@/common/libs/layout/interfaces/setting'

export function createSetting(dto: ISetting): IFullSetting {
  return { ...dto, hash: uuidv4() }
}
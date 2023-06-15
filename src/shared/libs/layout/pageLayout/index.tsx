import styles from './main.module.scss'
import React from 'react'

// Functions
import { initSettings } from '@layout'

// Interfaces
import { IFullComponent, ILayoutProps } from "@layout"

export function PageLayout(component: Function, props: ILayoutProps) {
  const initProps = initSettings(props)
  const imports: IFullComponent[] = initProps.imports || []
  const mainComponent = imports.find(elm => elm.isMain)

  return function ComponentWrapper(props: any) {
    return <div className={styles.container}>
      {imports.map((importedComponent: IFullComponent) => {
        const isMain = importedComponent.isMain
        const concatProps = {
          ...(importedComponent.props || {}),
          ...(props || {})
        }
        
        return <React.Fragment key={importedComponent.hash}>
          { isMain ? component(concatProps) : importedComponent.Component(concatProps) }
        </React.Fragment>
      })}
      { !mainComponent && component(props) }
    </div>
  }
}
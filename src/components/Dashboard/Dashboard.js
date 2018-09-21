import React from 'react'
import Product from './Product/Product'

const Dashboard = props => {
  return (
    <div className="dashboard">
      {props.inventory.map((item, index) => {
        return (
          <div>
            <Product key={item.id} item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard

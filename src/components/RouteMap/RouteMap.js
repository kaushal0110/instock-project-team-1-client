import React from "react"
import { Route, useLocation, Switch } from "react-router-dom"
import WarehouseList from "../WarehouseList/WarehouseList"
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse"
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails"
import AddNewInventoryItem from "../AddNewInventoryItem/AddNewInventoryItem"
import InventoryItemDetails from "../InventoryItemDetail/InventoryItemDetail"
import EditWarehouse from "../EditWarehouse/EditWarehouse"
import AddWarehouse from "../AddWarehouse/AddWarehouse"
import DeleteInventory from "../DeleteInventory/DeleteInventory"
import EditInventoryItem from "../EditInventoryItem/EditInventoryItem"
import InventoryList from "../InventoryList/InventoryList"

export default function NavigationMap() {
  let location = useLocation()
  //Background location is from where the modal Component is called from
  let background = location.state && location.state.background
  return (
    <>
      <Switch location={background || location}>
        <Route
          path="/warehouse/edit/:warehouseID"
          children={<EditWarehouse />}
        />
        <Route exact path="/warehouse/new" children={<AddWarehouse />} />
        <Route path="/warehouse/:warehouseId" children={<WarehouseDetails />} />
        <Route path="/inventory/delete/:item" children="" />
        <Route
          exact
          path="/inventory/edit/:warehouseID/:inventoryId"
          children={<EditInventoryItem />}
        />
        <Route path="/inventory/new" children={<AddNewInventoryItem />} />
        <Route
          path="/inventory/:warehouseId/:item"
          children={<InventoryItemDetails />}
        />
        <Route exact path="/warehouse" children={<WarehouseList />} />
        <Route exact path="/inventory" children={<InventoryList />} />
        <Route exact path="/" children={<WarehouseList />} />
      </Switch>
      {/* Show the requested modal when a background page is set */}
      {background && (
        <Route
          path="/warehouse/delete/:location"
          children={<DeleteWarehouse />}
        />
      )}
      {background && (
        <Route path="/inventory/delete/:item" children={<DeleteInventory />} />
      )}
    </>
  )
}

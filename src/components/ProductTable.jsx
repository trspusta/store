import React from 'react'
import Table from './Table'

const ProductTable = () => {
  return(
    <div>
        <Table.Tablecontainer>
            <Table.THead>
                <Table.Row>
                    <Table.ColumnHeader>Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Price</Table.ColumnHeader>
                </Table.Row>
            </Table.THead>

            <Table.TBody>
                <Table.Row>
                    <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Football</Table.Column>
                    <Table.Column>$49.99</Table.Column>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Baseball</Table.Column>
                    <Table.Column>$9.99</Table.Column>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Basketball</Table.Column>
                    <Table.Column>$29.99</Table.Column>
                </Table.Row>
            </Table.TBody>

            <Table.THead>
                <Table.Row>
                    <Table.ColumnHeader>Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Price</Table.ColumnHeader>
                </Table.Row>
            </Table.THead>

            <Table.TBody>
                <Table.Row>
                    <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Football</Table.Column>
                    <Table.Column>$49.99</Table.Column>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Baseball</Table.Column>
                    <Table.Column>$9.99</Table.Column>
                </Table.Row>
                <Table.Row>
                    <Table.Column>Basketball</Table.Column>
                    <Table.Column>$29.99</Table.Column>
                </Table.Row>
            </Table.TBody>
        </Table.Tablecontainer>
    </div>
  )
}

export default ProductTable
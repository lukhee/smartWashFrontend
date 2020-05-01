import React from 'react'
import styled from 'styled-components'
import { Package, Add_on } from '../../images/svg/package/index'

const PackageDiv = styled.div`
    font-size: 13px;
    margin: 12px; 
    cursor: pointer;
    /* color:${p=> p.isSelected === true ? 'red !important' : null }; */
    background:${p=> p.isSelected === true ? '#007bff1c !important' : null };
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
    &:hover {
        background: #f8f9fa;
        box-shadow: rgb(184, 196, 194) 0px 9px 10px -4px;
    }
`

const PackageMenu = ({packageData, onClick, show, onClickShow, state_pkg_id, state_add_on_id})=> {
    // PKS = packages
    const PKGs =  []
    const add_ons = []
    packageData.map(pack => {
        if(pack.type ==="package"){
            return PKGs.push(pack)
        } else {
            return add_ons.push(pack)
        }
    })

    return show === 2 &&
        <div>
            <h5> <i className="fab fa-battle-net"></i> Package </h5>
            <div className="row justify-content-around border-bottom">
                {PKGs.map(pkg=> 
                    <PackageDiv 
                        isSelected = {state_pkg_id === pkg._id ? true : false}
                        id="pkg"
                        onClick={(e)=> onClick({id: pkg._id, name: pkg.name, cost: pkg.price}, e)}
                        className=" bg-light col-sm-3 mb-3 d-flex justify-content-between p-2" 
                        key={pkg._id}>
                            <div className="my-auto">
                                <p className="font-weight-bold m-0"> {pkg.name}  </p>
                                <span style={{fontSize: "10px", color: "grey"}}> {pkg.description} </span>
                                <p className="m-0"> {pkg.price} </p>
                            </div>
                            <div className="w-25 h-100 rounded-circle bg-white p-1"> <Package/> </div>
                    </PackageDiv>
                )}
            </div>

            
            <div className="mt-2">
                <h5> <i className="fab fa-buffer"></i> Add_On </h5>
                <div className="row justify-content-around">
                    {add_ons.map(add_on=> 
                        <PackageDiv 
                            id="add_on"
                            isSelected = {state_add_on_id === add_on._id ? true : false}
                            className="bg-light col-sm-3 mb-3 d-flex justify-content-between p-2" 
                            key={add_on._id}
                            onClick={e=>onClick({id: add_on._id, name: add_on.name, cost: add_on.price}, e)}>
                            <div className="my-auto">
                                <p className="font-weight-bold m-0"> {add_on.name}  </p>
                                <span style={{fontSize: "10px", color: "grey"}}> {add_on.description} </span>
                                <p className="m-0"> {add_on.price} </p>
                            </div>
                            <div className="w-25 h-100 rounded-circle bg-white p-1"> <Add_on /> </div>
                        </PackageDiv>
                    )}
                </div>
            </div>
            <div className="text-right mb-1">
                <button disabled = {state_pkg_id != null ? false : true} className="btn btn-sm btn-primary px-4" onClick={()=> onClickShow()}> Next </button>
            </div>
        </div>
}

export default PackageMenu

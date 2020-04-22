import React from 'react'
import styled from 'styled-components'

const PackageDiv = styled.div`
    color:${p=> p.isSelected === true ? 'red !important' : null };
`

const PackageMenu = ({packageData, onClick, show, onClickShow, state_pkg_id, state_add_on_id})=> {
    // PKS = packages
    const PKGs =  []
    const add_ons = []
    packageData.map(pack => {
        if(pack.type ==="package"){
            PKGs.push(pack)
        } else {
            add_ons.push(pack)
        }
    })

    return show === 2 &&
        <div className="p-4">
            <h5 className="mb-3"> Package </h5>
            <div className="row justify-content-around border-bottom">
                {PKGs.map(pkg=> 
                    <PackageDiv 
                        isSelected = {state_pkg_id === pkg._id ? true : false}
                        id="pkg"
                        onClick={(e)=> onClick({id: pkg._id, name: pkg.name, cost: pkg.price}, e)}
                        className=" bg-light mr-2 mb-2 px-3 py-2 btn col-sm-3" 
                        key={pkg._id}>
                            <p> <span className="font-weight-bold">{pkg.name} </span> </p>
                            <p> {pkg.description} </p>
                            <p> {pkg.price} </p>
                    </PackageDiv>
                )}
            </div>

            
            <div className="mt-2">
                <h5> Add_On </h5>
                <div className="row justify-content-around border-bottom my-2">
                    {add_ons.map(add_on=> 
                        <PackageDiv 
                            id="add_on"
                            isSelected = {state_add_on_id === add_on._id ? true : false}
                            className="bg-light col-sm-3 mr-2 mb-2 px-5 py-2 btn" 
                            key={add_on._id}
                            onClick={e=>onClick({id: add_on._id, name: add_on.name, cost: add_on.price}, e)}>
                            <p> <span className="font-weight-bold">{add_on.name} </span> </p>
                            <p> {add_on.description} </p>
                            <p> {add_on.price} </p>
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

import React from "react";

//함수형 컴포넌트-return()
const MyDeivce= ({mydata})=>{
    return(
        <div>
            <h3>MyDeivce</h3>
            {
                mydata.myDeviceData.map((device, index)=>{
                    console.log(device.name)
                    console.log(JSON.stringify(device.name))
                    return(
                        <div key={index}>
                            key: {index} <br/>
                            name: {device.name} <br/>
                            ram: {device.ram} <br/>
                            homeButton: {(device.homeButton===true)?'있음':'없음'} <br/><br/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyDeivce;
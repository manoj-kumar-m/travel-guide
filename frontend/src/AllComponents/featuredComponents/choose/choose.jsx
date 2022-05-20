import classes from './choose.module.css'
import data from './data.json'
import React,{useEffect,useState} from 'react'

const Choose = () => {
    const state = {
        id:1,
        s: "state",
        d: "district",
        c: "city"
    }
    
    const [areaid, setAreaid] = useState('');
    // const [Area, setArea]= useState([]);
    const [stateid, setStateid] = useState('');
    // const [State, setState]= useState([]);
    const [districtid, setDistrictid]=useState('');
    // const [district, setDistrict]= useState([]);
    const [cityid, setCityid]=useState('');
    // const [city, setCity]= useState([]);

    
   
    
    const handlearea=(event)=>{
        const getareaid= event.target.value;
        setAreaid(getareaid);
    }
  
     const handlestate=(event)=>{
        const getstateid= event.target.value;
         setStateid(getstateid);
         
    }

    const handledistrict=(event)=>{
        const getdistrictid = event.target.value;
        
        setDistrictid(getdistrictid);
    }


    return (

        <>
            <div className={classes.container}>
                <div className={classes.row}>
                    <h2 className={classes.heading}> Select State, District, City, Days </h2>

        {/*---------------------------------------- form ------------------------------------------------------------------------  */}
        
                    <form className={classes.form} action="" method='post'>

                        <div className={classes.col3}>
                            <label className={classes.formLabel}>Which Tour U R Looking For :  </label>
                          
                            <select  name="country" className={classes.formSelect}  onChange={(e)=>handlearea(e)} >
                                <option value="" >----- Select Area -----</option>
                                <option key={state.id} value={state.s}>{state.s} </option>
                                <option key={state.id} value={state.d}>{state.d} </option>
                                <option key={state.id} value={state.c}>{state.c} </option>
                            </select>
                        </div>

        {/*--------------------------------------- State -------------------------------------------------------------------------  */}
                        

                        { areaid === 'state' &&

                            <div className={classes.col3}>
                                <label className={classes.formLabel}>State </label>
                                <input type="text" list='stateInput' />
                                <datalist id='stateInput' value="----- Select State -----" name="country" className={classes.formSelect} onChange={(e) => handlestate(e)} >
                                    <option value="">----- Select State -----</option>
                                    {
                                        data.states.map(state => (
                                            <option key={state.s_id} value={state.state}>{state.state} </option>
                                        ))
                                    }
                                </datalist>
                            </div>
                        }
                        
        {/*----------------------------------------------------------------------------------------------------------------  */}
        

                        { areaid === 'district' &&

                            (
                                <div className={classes.stateContainer}>
                                    <div className={classes.col3}>
                                        <label className={classes.formLabel}>State</label>
                                        <select className={classes.formSelect} name="state" onChange={(e) => handlestate(e)}>
                                            <option value="">----- Select State -----</option>
                                            {
                                                data.states.map(state => (
                                                    <option key={state.s_id} value={state.state}>{state.state} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                

                                    <div className={classes.col3}>
                                        <label className={classes.formLabel}>District</label>
                                        <select className={classes.formSelect} name="state" onChange={(e) => handledistrict(e)}>
                                            <option value="">----- Select District -----</option>
                                            {
                                            stateid ? data.states.filter((ele) => ele.state === stateid)[0].districts.map(i =>
                                                
                                                <option key={i} value={i}>{i}</option>
                                            ) : ''
                                                
                                            }
                                        </select>
                                    </div>
                                </div>
                           )

                        }
                        

        {/*----------------------------------------------------------------------------------------------------------------  */}
        
                    { areaid === 'city' &&
                            
                        
                            <div className={classes.col3}>
                                <label className={classes.formLabel}>Select a Place : </label>
                                <input list="districtInput" type="text"  />
                                <datalist id="districtInput"  className={classes.formSelect} name="city">
                                    <option value="">--Select City--</option>
                                    {
                                        data.places.map(place => (
                                            <option key={place.id} value={place.name}>{place.name} </option>
                                        ))
                                    }
                                </datalist>
                            </div>
                            
                        }
        {/*----------------------------------------------------------------------------------------------------------------  */}
                       
                            
                            <div className={classes.col3}>
                                <label className={classes.formLabel}>Number of Days : </label>
                                <select className={classes.formSelectDays} name="city">
                                    <option value="">-- Select Days --</option>
                                    {
                                        data.days.map(days => (
                                            <option key={days.id} value={days.number}>{days.number} days</option>
                                        ))
                                    }
                                </select>
                            </div>
                            
                    

        {/*----------------------------------------------------------------------------------------------------------------  */}
                        


                        <div className={classes.col3}>                
                            <button type="button" className={classes.btn}>Submit</button>
                        </div>
            
                    </form>
                </div>
            </div>
        
        
        </>
    );
  
}

export default Choose
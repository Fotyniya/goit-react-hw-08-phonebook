import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import { Label, FilterInput } from "./Filter.styled"

export default function Filter () {
    const dispatch = useDispatch(); 
   
    const handleFilterChange = e => {
        dispatch(setFilter(e.currentTarget.value));
        console.log(e.currentTarget.value)
    };

    return (
    <form >
        <Label><h3>Find contact by name</h3>
            <FilterInput type="text" onChange={ handleFilterChange }/>
        </Label>
    </form> 
    );
};
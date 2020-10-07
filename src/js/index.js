
import Search from "./module/Search";
/**Global state of the app
 *- search object
 - current recipe
 - shopping list object
 - liked recipes **/
const state={};

const controlSearch =async()=>{
    //1)Get query from view
    const query ='pizza';//TODO

    if(query){
        //2)new search object and add to state
        state.search = new Search(query);

        //3)Prepare UI for result

        //4)Search for recipes
        await state.search.getResults();

        //5)Render results on UI
        console.log(state.search.result);
    }

}

document.querySelector('.search').addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
});
const search = new Search('pizza');
console.log(search);
search.getResults();

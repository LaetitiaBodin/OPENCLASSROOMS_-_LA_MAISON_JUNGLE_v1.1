// import * => The modules will be used like read-only objects.
// eg: One can console.log the value of cart.cart but they cannot edit it here.
import * as banner from './Banner'
import * as cart from './Cart'

function App() {
    return  <div>
              <banner.Banner />
              <cart.Cart />
              <cart.Flowers />
            </div>
}

export default App
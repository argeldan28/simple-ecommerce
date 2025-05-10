import { IoMdClose } from "react-icons/io";

export default function Sidebar({ cart, toggleSidebar, onChangeQuantity }) {
    
	const totalPrice = cart.reduce((sum, product) =>
		sum + product.price * product.quantity,0
	).toFixed(2);
	
	return (
        <div className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg p-4 pt-12 z-50">

            <button
							className="text-xl absolute top-4 right-4"
							onClick={toggleSidebar}
            >
            <IoMdClose size={30} />
            </button>
						<h2 className="text-3xl font-semibold mb-4">Carrello</h2>
            {cart.length === 0 ? 
							(
								<p>Il carrello è vuoto</p>
							) 
								: 
							(
								<ul>
										{cart.map((product) => (
										<li key={product.id} className="border-b py-2">
												<div className="flex justify-between items-center">
												<span>{product.name}</span>
												<span>€{product.price}</span>
												<div className="flex items-center">
														<button
														onClick={() => onChangeQuantity(product.id, -1)}
														className="text-gray-500 mr-2"
														>
														-
														</button>
														<span>{product.quantity}</span>
														<button
														onClick={() => onChangeQuantity(product.id, 1)}
														className="text-gray-500 ml-2"
														>
														+
														</button>
												</div>
												</div>
										</li>
										))}
								</ul>
            	)
						}
            <div className="mt-4">

						<div>
							<h3 className="text-lg font-semibold mb-4">Prezzo totale: {totalPrice}</h3>
						</div>

            <button
							className={`py-2 px-4 rounded w-full text-white ${
								cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
							}`}
							disabled={cart.length === 0}
						>
							Procedi al checkout
						</button>
            </div>
        </div>
    );
  }
  
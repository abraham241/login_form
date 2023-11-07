import React from "react";


function login (){
    return (
        <>
            <div>
                <div>
                    <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
                    <img src="votre-image.jpg" alt="En-tête du formulaire" className="mx-auto mb-4 w-32 h-32" />

                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                                E-mail
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Votre adresse e-mail"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                                Mot de passe 
                                <a className="text-blue-500 text-xs ml-2 hover:underline" href="#">
                                    Mot de passe oublié ?
                                </a>
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Votre mot de passe"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <input
                                className="mr-2 leading-tight"
                                id="rememberMe"
                                type="checkbox"
                                />
                                <label className="text-gray-700 text-sm" htmlFor="rememberMe">
                                Se souvenir de moi
                                </label>
                            </div>
                            <div className="mb-6">
                                <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                                type="button"
                                >
                                Connexion
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* la partie de droite */}
                <div>

                </div>
            </div>
        </>
    )
}

export default login
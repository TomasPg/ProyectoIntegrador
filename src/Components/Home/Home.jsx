import "./Home.css"

export function Home (){
    return(
        <>

            <section className="container margin-custom-top">
                <div className="col-12 col-md-10 offset-md-3">
                    <div className="col-12 col-md-8">

                        <h3 className="title1 text-center">Registro de Usuarios</h3>

                        <form className=" form p-5">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-person-circle"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-cake2-fill"></i>
                                </span>
                                <input type="number" class="form-control" placeholder="Edad" min={0}/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-telephone-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Telefono"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Correo"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-key-fill"></i>
                                </span>
                                <input type="password" class="form-control" placeholder="Contraseña"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-calendar"></i>
                                </span>
                                <input type="date" class="form-control" placeholder="Fecha de Registro"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                <i class="bi bi-building"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Ciudad"/>
                            </div>

                            <button className="btn btn-outline-light w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
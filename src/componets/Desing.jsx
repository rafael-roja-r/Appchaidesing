import React from "react";

const Desing = ()=>{
    return(
        <div className="desing">
            <div className="desing__conten">
               <div className="desing__container__canvas">   
               <div className="desing__canvas">
                <div className="desing__proyecto">
                <form >
                    <h4>Información del proyecto</h4>
                    <label htmlFor="">Poyecto</label>
                    <input type="text" id="proyect" name="poryecto"  placeholder="Proyecto" />
                    <label htmlFor="" id="id" placeholder="id">Id</label>
                    <label id="name">Nombre</label>
                    <input type="text" id="name"  />
                    <input type="date" id="date" />
                    <label id="zise">Tamaño</label>
                    <label id="client">Cliente</label>
                    <input type="text" id="cliemt" name="client" placeholder="Nombre del cliente"/>
                    <label id="conpartir">Compartir</label>
                </form>                
                <button type="submit">Guardar</button>
                </div>

                <div className="desing__cuarto">
                <h4>Información del cuarto o habitación</h4>
                    <label >Cuarto</label>
                    <input type="text" id="cuarto" name="cuarto" placeholder="Descripción del cuarto" />
                    <label >Tipos de muebles</label>
                    <select name="" id="tipos_m">
                        <option value="">seleccionar...</option>
                    </select>  
                    <label >Tipos de cubierta</label>
                    <select name="" id="tipos_c">
                        <option value="">seleccionar...</option>
                    </select> 

                    <button type="submit">Guardar</button>
                </div>

                <div className="desing__muebles">
                <h4>Información del mueble</h4>
                 
                 <form >
                    <label id="dsm" >ID </label>
                    <select name="" id="dsms">
                         <option value="">Seleccionar mueble</option>
                        </select>
                    <input type="number" id="ancho" placeholder="ancho" />    
                    <input type="number" id="largo" placeholder="largo" />   
                    <input type="number" id="profundidad" placeholder="Espesor del mueble" />  

                    <select name="" id="">
                        <option id="#dpin" value="">selecionar interno</option>
                        <option id="#pex" value="">selecionar externa</option>
                    </select>
                    <div id="dpex" className="desing__partes__externa">
                        <label >Parte externa </label>
                        <select name="" id="">
                            <option value="">Cajón</option>
                            <option value="">Puerta</option>
                            <option value="">Puerta deslizable</option>
                            <option value="">Libre</option>
                        </select>
                        <div className="desing__input__externa">
                            <input type="number" placeholder="Amcho"  />
                            <input type="number" placeholder="Altura"  />
                            <input type="number" placeholder="Profundidad"  />
                        </div>
                        <select name="" id="">
                            <option value="">Seleccionar material</option>
                        </select>
                        <button >+</button>
                        <button >x</button>
                    </div>
                    <div id="dpin" className="desing__partes__externa">
                    <label >Parte interna </label>
                        <select name="" id="">
                            <option value="">Repisa fija</option>
                            <option value="">Repisa movil</option>
                            <option value="">Parante</option>
                            <option value="">Tubo de closet</option>
                            <option value="">Cajón interno</option>
                            <option value="">Bloque</option>
                        </select>
                        <div className="desing__input__externa">
                            <input type="number" placeholder="Amcho"  />
                            <input type="number" placeholder="Altura"  />
                            <input type="number" placeholder="Profundidad"  />
                        </div>
                        <select name="" id="">
                            <option value="">Seleccionar material</option>
                        </select>
                        <button >+</button>
                        <button >x</button>
                    </div>
                 </form>
                 <button>Guardar</button>
                </div>
                

               </div>
                       
               </div>
               <div className="desing__descrip__canvas">
                

               </div>
            </div>

            <div className="desing__cotizar">

            </div>
        </div>
    );
}
export default Desing;
import React from 'react'

export const Form = () => {
    return (
        <>
            <div className='bg-warning py-5'>
                <div className='container bg-white w-50'>
                    <form>
                        <div class="form-group mb-3 px-4 pt-5">
                            <label for="exampleInputEmail1"><strong>Email</strong></label>
                            <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                        </div>
                        <div class="form-group mb-3 px-4">
                            <label for="exampleFormControlTextarea1"><strong>Mensaje</strong></label>
                            <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-warning text-danger mb-5 mx-4">Enviar</button>
                    </form>
                </div>
            </div>
        </>

    )
}
export default Form

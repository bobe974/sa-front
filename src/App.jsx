import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  //hookform
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-blue-700 text-white min-h-screen flex items-center justify-center">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group flex flex-col  mb-4">
            <label htmlFor="avis" className="mb-2 text-lg">
              Votre avis
            </label>
            <textarea
              {...register("avis", { required: true })}
              className="w-full p-2 text-lg text-black rounded-md"
              name="avis"
              id="avis"
              rows="4"
              placeholder="Saisissez votre avis ici..."
            ></textarea>
            {errors.avis && <span className="text-rose-500">Ce champs est requis</span>}
          </div>
          <label htmlFor="email">Votre email</label>
          <div className="form-group flex flex-col mb-4 ">
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full p-2 text-lg text-black rounded-md"
              placeholder="Votre adresse e-mail"
            />
            {errors.email && <span className="text-rose-500">Ce champs est requis</span> }
          </div>

          <div className="form-group flex flex-col">
            <button type="submit" className="p-2 bg-green-700 rounded-md">
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;

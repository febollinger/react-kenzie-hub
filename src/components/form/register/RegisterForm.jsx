import { StyledButton } from "../../../styles/button";
import { StyledFormRegister } from "../register/formRegister";

import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export const RegisterForm = () => {
  const { handleSubmit, errors, register, loading, registerUser } =
    useContext(UserContext);

  return (
    <>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa.</p>
      <StyledFormRegister onSubmit={handleSubmit(registerUser)} noValidate>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && <p>{errors.name?.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio && <p>{errors.bio.message}</p>}

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact && <p>{errors.contact.message}</p>}

        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          name="course_module"
          id="course_module"
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo Módulo (Frontend avançado)">
            Segundo Módulo (Frontend avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        {errors.course_module && <p>{errors.course_module.message}</p>}

        <StyledButton type="submit" buttonColor="entrar">
          {loading ? "Cadastrando..." : "Cadastrar"}
        </StyledButton>
      </StyledFormRegister>
    </>
  );
};

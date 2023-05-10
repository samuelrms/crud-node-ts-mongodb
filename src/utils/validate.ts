export const validateCpf = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let mod = sum % 11;
  const firstVerifier = mod < 2 ? 0 : 11 - mod;
  if (parseInt(cpf.charAt(9)) !== firstVerifier) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  mod = sum % 11;
  const secondVerifier = mod < 2 ? 0 : 11 - mod;
  if (parseInt(cpf.charAt(10)) !== secondVerifier) return false;

  return true;
};

export const validateBirth = (data: string): boolean => {
  const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regexData.test(data)) return false;

  const [dia, mes, ano] = data.split("/");
  const dataNascimento = new Date(Number(ano), Number(mes) - 1, Number(dia));

  if (dataNascimento.getFullYear() != Number(ano)) return false;
  if (dataNascimento.getMonth() != Number(mes) - 1) return false;
  if (dataNascimento.getDate() != Number(dia)) return false;

  return true;
};

export const isStrongPassword = (password: string): boolean => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

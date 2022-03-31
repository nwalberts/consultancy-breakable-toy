import tellSign from "sign-teller";

export const getZodiac = (dateString: string): string => {
  const birthdate: number = Date.parse(dateString);
  const day: number = new Date(birthdate).getDate();
  const month: number = new Date(birthdate).getMonth() + 1;

  return tellSign({ day, month }, "tropical").sign;
};

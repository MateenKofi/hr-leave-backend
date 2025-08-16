import prisma from "./prisma";

function getRandomNumber(length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

export const generateEmployeeId = async (
  departmentId: string | null,
): Promise<string> => {
  if (!departmentId) {
    // Handle null case here, e.g., fallback employeeId for users without department
    const fallbackPrefix = "SA"; // or "GEN", etc.
    const randomNumber = getRandomNumber(4);
    return `${fallbackPrefix}${randomNumber}`;
  }

  const department = await prisma.department.findUnique({
    where: { id: departmentId },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  const initials = department.name.slice(0, 3).toUpperCase();
  const randomNumber = getRandomNumber(4);

  return `${initials}${randomNumber}`;
};

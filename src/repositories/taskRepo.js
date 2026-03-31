import prisma from '../config/db.js';

export async function findAll(completed) {
  const tasks = await prisma.task.findMany({
    where: { completed: completed },
  });
  return tasks;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

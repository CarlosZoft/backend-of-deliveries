import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryMan {
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({ password, username }: ICreateDeliveryMan) {
    const deliveryManExist = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliveryManExist) {
      throw new Error("DeliveryMan Already exists");
    }

    const hashPassword = await hash(password, 10);

    const deliveryMan = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryMan;
  }
}

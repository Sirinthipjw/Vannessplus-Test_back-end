-- CreateTable
CREATE TABLE `register` (
    `idRegister` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(45) NOT NULL,
    `lastName` VARCHAR(45) NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `gender` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `tel` TEXT NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idRegister`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

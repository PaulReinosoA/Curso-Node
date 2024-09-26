-- CreateEnum
CREATE TYPE "LogSeverityLevel" AS ENUM ('low', 'medium', 'high');

-- CreateTable
CREATE TABLE "LogModel" (
    "id" SERIAL NOT NULL,
    "level" "LogSeverityLevel" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "origin" TEXT NOT NULL,

    CONSTRAINT "LogModel_pkey" PRIMARY KEY ("id")
);

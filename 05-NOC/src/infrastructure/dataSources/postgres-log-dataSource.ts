import { PrismaClient } from '@prisma/client';
import { LogDataSource } from '../../domain/dataSources/log.dataSource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export class PostgresLogDataSource implements LogDataSource {
  async saveLog(log: LogEntity): Promise<void> {
    const { level, message, origin } = log;

    const prisma = new PrismaClient();
    const newLog = await prisma.logModel.create({
      data: {
        level,
        message,
        origin,
      },
    });
    console.log('PostgreSQL log created:', newLog.id);
  }

  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const prisma = new PrismaClient();
    const logs = await prisma.logModel.findMany({
      where: { level: `${severityLevel}` },
    });
    return logs.map((postgresLog) => LogEntity.fromObject(postgresLog));
  }
}

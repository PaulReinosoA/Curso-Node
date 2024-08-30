import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  /**
   * createJob
   */
  public static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
    const job = new CronJob(
      cronTime, // cronTime
      onTick
    );
    job.start();
    return job;
  }
}

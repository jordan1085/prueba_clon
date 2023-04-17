import * as bcrypt from 'bcrypt';

export class EncryptUtil {
  public static encrypt(pass: string): string {
    return bcrypt.hashSync(pass, 12);
  }

  public static compare(pass: string, check: string): boolean {
    return bcrypt.compareSync(pass, check);
  }
}

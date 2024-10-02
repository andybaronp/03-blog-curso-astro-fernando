export class Formater {
  static formatNumber(number: Date): string {
    const date = new Date(number)
    return Intl.DateTimeFormat('es-Es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }
}

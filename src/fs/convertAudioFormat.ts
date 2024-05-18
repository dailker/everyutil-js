/**
 * Converts an audio file to a different format (mp3, wav, ogg).
 *
 * @author @dailker
 * @param {string} filePath - Path to the audio file.
 * @param {'mp3' | 'wav' | 'ogg'} outputFormat - Output audio format.
 * @returns {Promise<void>} Resolves when conversion is complete.
 */
export async function convertAudioFormat(filePath: string, outputFormat: 'mp3' | 'wav' | 'ogg'): Promise<void> {
    const ffmpeg = await import('fluent-ffmpeg');
    const path = await import('path');
    const outPath = path.format({ ...path.parse(filePath), base: undefined, ext: '.' + outputFormat });
    await new Promise((resolve, reject) => {
        ffmpeg.default(filePath).toFormat(outputFormat).on('end', resolve).on('error', reject).save(outPath);
    });
}

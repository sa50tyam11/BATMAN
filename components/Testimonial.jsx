'use client'
import { motion } from 'framer-motion';

export default function Testimonial() {
    return (
        <section className="w-full bg-[#0a0a0a] py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        {/* SERIF QUOTE MARK */}
                        <div className="text-[#EF4444] text-8xl md:text-9xl font-serif leading-none h-16 md:h-20 mb-4">
                            “
                        </div>

                        {/* SERIF ITALIC QUOTE TEXT */}
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal tracking-tight leading-[1.1] mb-12">
                            <span className="text-white">Working with Satyam felt personal. </span>
                            <span className="text-zinc-500">The process was incredibly smooth, and the final design was stunning.</span>
                        </h3>

                        <div className="flex items-center gap-6 border-t border-white/10 pt-8 mt-auto">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                                <img src="/ranjan sir.png" alt="Mr. Ranjan" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-sans font-medium text-xl mb-1">Mr. Ranjan</span>
                                <span className="text-zinc-500 font-sans font-light text-sm tracking-wide">
                                    CEO at <span className="text-[#E87A1E] font-medium">Soft</span> <span className="text-[#1D559F] font-medium">Campus</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-full relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden bg-gradient-to-tr from-zinc-900 to-zinc-800 p-8 flex items-center justify-center border border-white/5"
                    >
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
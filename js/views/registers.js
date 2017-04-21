var RegistersView = Backbone.View.extend({
	className: 'registers',

	initialize: function () {
		this.template = _.template($('#tmpl_registers').html());
		this.render();
	},

	render: function () {
		var registers = {
			rax_hex: '0x' + padHex(REG[0].toUnsigned().toString(16), 16),
			rax_dec: (REG[0] >> 0).toString(10),
			rcx_hex: '0x' + padHex(REG[1].toUnsigned().toString(16), 16),
			rcx_dec: (REG[1] >> 0).toString(10),
			rdx_hex: '0x' + padHex(REG[2].toUnsigned().toString(16), 16),
			rdx_dec: (REG[2] >> 0).toString(10),
			rbx_hex: '0x' + padHex(REG[3].toUnsigned().toString(16), 16),
			rbx_dec: (REG[3] >> 0).toString(10),
			rsp_hex: '0x' + padHex(REG[4].toUnsigned().toString(16), 16),
			rsp_dec: (REG[4] >> 0).toString(10),
			rbp_hex: '0x' + padHex(REG[5].toUnsigned().toString(16), 16),
			rbp_dec: (REG[5] >> 0).toString(10),
			rsi_hex: '0x' + padHex(REG[6].toUnsigned().toString(16), 16),
			rsi_dec: (REG[6] >> 0).toString(10),
			rdi_hex: '0x' + padHex(REG[7].toUnsigned().toString(16), 16),
			rdi_dec: (REG[7] >> 0).toString(10),

			r8_hex: '0x' + padHex(REG[8].toUnsigned().toString(16), 16),
			r8_dec: (REG[8] >> 0).toString(10),
			r9_hex: '0x' + padHex(REG[9].toUnsigned().toString(16), 16),
			r9_dec: (REG[9] >> 0).toString(10),
			r10_hex: '0x' + padHex(REG[10].toUnsigned().toString(16), 16),
			r10_dec: (REG[10] >> 0).toString(10),
			r11_hex: '0x' + padHex(REG[11].toUnsigned().toString(16), 16),
			r11_dec: (REG[11] >> 0).toString(10),
			r12_hex: '0x' + padHex(REG[12].toUnsigned().toString(16), 16),
			r12_dec: (REG[12] >> 0).toString(10),
			r13_hex: '0x' + padHex(REG[13].toUnsigned().toString(16), 16),
			r13_dec: (REG[13] >> 0).toString(10),
			r14_hex: '0x' + padHex(REG[14].toUnsigned().toString(16), 16),
			r14_dec: (REG[14] >> 0).toString(10),

			sf: SF,
			zf: ZF,
			of: OF,
			stat: STAT,
			err: ERR,
			pc: '0x' + padHex(PC.toString(16), 4)
		};

		this.$el.empty().append(this.template(registers));
	}
});
